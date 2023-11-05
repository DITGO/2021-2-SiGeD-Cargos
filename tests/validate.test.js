const { validateRole } = require('../src/Utils/validate.js');
const validator = require('validator');

describe('validateRole function', () => {
  it('should return an error if name is empty', () => {
    const data = {
      name: '',
      description: 'Some description',
    };

    const errors = validateRole(data);
    expect(errors).toContain('name cannot be empty');
  });

  it('should return an error if description is empty', () => {
    const data = {
      name: 'Some name',
      description: '',
    };

    const errors = validateRole(data);
    expect(errors).toContain('description cannot be empty');
  });

  it('should return no errors for valid data', () => {
    const data = {
      name: 'Some name',
      description: 'Some description',
    };

    const errors = validateRole(data);
    expect(errors).toEqual([]);
  });

  it('should use validator.isEmpty function', () => {
    const data = {
      name: '',
      description: 'Some description',
    };

    const isEmptySpy = jest.spyOn(validator, 'isEmpty');

    validateRole(data);

    expect(isEmptySpy).toHaveBeenCalledWith(data.name);
    expect(isEmptySpy).toHaveBeenCalledWith(data.description);

    isEmptySpy.mockRestore();
  });
});
