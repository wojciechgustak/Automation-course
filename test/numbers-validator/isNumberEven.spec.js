import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should retur true when provided with an even number', () => {
    const validatiorResults = validator.isNumberEven(4);
    expect(validatiorResults).to.be.equal(true);
  });

  it('should retur false when provided with an odd number', () => {
    const validatiorResults = validator.isNumberEven(5);
    expect(validatiorResults).to.be.equal(false);
  });


  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});
