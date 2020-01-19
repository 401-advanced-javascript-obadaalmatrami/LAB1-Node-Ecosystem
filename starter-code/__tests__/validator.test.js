'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

    // TODO: Make this series of tests less repetitive ... DRY it out

    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => {};
    let bool = false;
    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        for (let i = 0; i < dataType.length; i++) {
            expect(validator.isString(dataType[i])).toBeFalsy();
        }
    });

    it('numbers', () => {
        expect(validator.isNumber(num)).toBeTruthy();
    });

    it('arrays', () => {
        expect(validator.isArray(arr)).toBeTruthy();
    });

    it('objects', () => {
        expect(validator.isObject(obj)).toBeTruthy();
    });

    it('booleans', () => {
        expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
        expect(validator.isFunction(fun)).toBeTruthy();
    });

});

describe('validator module performs complex validations', () => {
    const Car = {
        name: 'Range rover',
        type: 'sedan',
        year: 2010,
        stuff: ['V8 engine supercharged', '8 speed transmission', 'suv'],
        sport: null,
        sunroof: ['yes']
    }



    it('validates the presence of required object properties at any level', () => {
        expect(Car.name).toBeTruthy();
        expect(Car.year).toStrictEqual(2010);
    });

    it('validates the proper types of object properties', () => {

        expect(Car.type).toStrictEqual('string');
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        expect(typeof Car.stuff[0]).toMatch('string');
    });

    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        expect(true).toBeFalsy();
    });

    // TODO: Cover so, so many more cases

});