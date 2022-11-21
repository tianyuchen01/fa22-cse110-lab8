// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
describe('testing function isPhoneNumber', () => {
    test('test isPhoneNumber - valid phone number', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });
    
    test('test isPhoneNumber - valid phone number', () => {
        expect(functions.isPhoneNumber('(186)237-2358')).toBe(true);
    });
    
    test('test isPhoneNumber - invalid phone number', () => {
        expect(functions.isPhoneNumber('0123456789')).toBe(false);
    });
    
    test('test isPhoneNumber - invalid phone number', () => {
        expect(functions.isPhoneNumber('ran-dom-numb')).toBe(false);
    });
});

// isEmail
describe('testing function isEmail', () => {
    test('test isEmail - valid email', () => {
        expect(functions.isEmail('somename@email.com')).toBe(true);
    });
    
    test('test isEmail - valid email', () => {
        expect(functions.isEmail('emp123@comp.co')).toBe(true);
    });

    test('test isEmail - invalid email', () => {
        expect(functions.isEmail('not_an_email')).toBe(false);
    });

    test('test isEmail - invalid email', () => {
        expect(functions.isEmail('name@comp.toolong')).toBe(false);
    });
});

// isStrongPassword
describe('testing function isStrongPassword', () => {
    test('test isStrongPassword - valid strong password', () => {
        expect(functions.isStrongPassword('aStrong1')).toBe(true);
    });

    test('test isStrongPassword - valid strong password', () => {
        expect(functions.isStrongPassword('Im_g00d')).toBe(true);
    });

    test('test isStrongPassword - invalid strong password', () => {
        expect(functions.isStrongPassword('sho')).toBe(false);
    });

    test('test isStrongPassword - invalid strong password', () => {
        expect(functions.isStrongPassword('invalid@chars#')).toBe(false);
    });
});

// isDate
describe('testing function isDate', () => {
    test('test isDate - valid date', () => {
        expect(functions.isDate('11/21/2022')).toBe(true);
    });

    test('test isDate - valid date', () => {
        expect(functions.isDate('7/9/2018')).toBe(true);
    });

    test('test isDate - invalid date', () => {
        expect(functions.isDate('8612/3865/238576')).toBe(false);
    });

    test('test isDate - invalid date', () => {
        expect(functions.isDate('June 26 2022')).toBe(false);
    });
});

// isHexColor
describe('testing function isHexColor', () => {
    test('test isHexColor - valid hex color', () => {
        expect(functions.isHexColor('#82649b')).toBe(true);
    });

    test('test isHexColor - valid hex color', () => {
        expect(functions.isHexColor('f93')).toBe(true);
    });

    test('test isHexColor - invalid hex color', () => {
        expect(functions.isHexColor('ks16hg')).toBe(false);
    });

    test('test isHexColor - invalid hex color', () => {
        expect(functions.isHexColor('color')).toBe(false);
    });
});
