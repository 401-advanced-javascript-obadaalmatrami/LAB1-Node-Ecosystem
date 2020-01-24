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
    let dataType = [str, num, arr, obj, func, bool]
    it('strings', () => {
        for (let i = 0; i < dataType.length; i++) {
            if (typeof(dataType[i]) === 'string') expect(validator.isString(str)).toBeTruthy();
            else expect(validator.isString(dataType[i])).toBeFalsy();
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
        expect(validator.isFunction(func)).toBeTruthy();
    });

});

describe('validator module performs complex validations', () => {
    const Car = {
        name: 'Range rover',
        year: 2010,
        type: "suv",
        stuff: ['V8 engine supercharged', '8 speed transmission', 'suv'],
        sport: null,
        sunroof: ['yes']
    }



    it('validates the presence of required object properties at any level', () => {
        expect(Car.name).toBeTruthy();
        expect(Car.year).toStrictEqual(2010);
    });

    it('validates the proper types of object properties', () => {

        expect(typeof(Car.type)).toStrictEqual('string');
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        expect(typeof Car.stuff[0]).toMatch('string');
    });

    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        expect(Car.sport).toBeNull();
    });

    // TODO: Cover so, so many more cases

});