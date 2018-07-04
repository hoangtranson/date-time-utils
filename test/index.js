import { assert, expect } from 'chai';

describe('ASK module PASS cases', () => {
  let _arr, _obj, _string, _date, _regExp, _function, _boolean, _number, _null, _undefined, _generator, _map, _weekMap;
  beforeEach( () => {
    _arr = [];
    _obj = {};
    _string = '';
    _date = new Date();
    _regExp = /[0-9]/gi;
    _function = () => true;
    _boolean = true;
    _number = 0;
    _null = null;
    _undefined = undefined;
    _generator = function* (){};
    _map = new Map();
    _weekMap = new WeakMap();
  })

  it('ASK.isArray([]) => true', () => {
    // expect(ASK.isArray(_arr)).to.equal(true);
  });
});


describe('ASK module FAIL cases', () => {
  let _arr, _obj, _string, _date, _regExp, _function, _boolean, _number, _null, _undefined, _generator, _map, _weekMap;
  beforeEach( () => {
    _arr = {};
    _obj = [];
    _string = false;
    _date = 1;
    _regExp = 'a';
    _function = {};
    _boolean = 1;
    _number = 'a';
    _null = 1;
    _undefined = null;
    _generator = function (){};
    _map = {};
    _weekMap = new Set();
  })

  it('ASK.isArray({}) => false', () => {
    // expect(ASK.isArray(_arr)).to.equal(false);
  });
});
