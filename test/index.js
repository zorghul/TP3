var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });
  
  describe('is.array', function () {
    it('should return true if passed parameter type is array', function () {
      expect(is.array(['value1','value2'])).to.be.true;
	});
    it("should return false if passed parameter type is not arrays", function () {
      expect(is.array('mayeul')).to.be.false;
    });
  });
  
  describe('is.boolean', function () {
    it('should return true if passed parameter type is boolean', function () {
		var bool = true;
      expect(is.boolean(bool)).to.be.true;
	});
    it("should return false if passed parameter type is not boolean", function () {
		var notBool = 'mayeul';
      expect(is.boolean(notBool)).to.be.false;
    });
  });
  
  describe('is.date', function () {
    it('should return true if passed parameter type is date', function () {
		var dateAge = new Date;
      expect(is.date(dateAge)).to.be.true;
	});
    it("should return false if passed parameter type is not date", function () {
		var notDate = 'mayeul';
      expect(is.date(notDate)).to.be.false;
    });
  });
  
  describe('is.error', function () {
    it('should return true if passed parameter type is error', function () {
		var err = new Error();
      expect(is.error(err)).to.be.true;
	});
    it("should return false if passed parameter type is not error", function () {
		var notError = 'mayeul';
      expect(is.error(notError)).to.be.false;
    });
  });
  
  describe('is.function', function () {
    it('should return true if passed parameter type is function', function () {
		var bob = true;
      expect(is.boolean(bob)).to.be.true;
	});
    it("should return false if passed parameter type is not function", function () {
		var notFct = 'mayeul';
      expect(is.function(notFct)).to.be.false;
    });
  });
  
  describe('is.nan', function () {
    it('should return true if passed parameter type is nan', function () {
      expect(is.nan(NaN)).to.be.true;
	});
    it("should return false if passed parameter type is not nan", function () {
		var notNan = 'mayeul';
      expect(is.nan(notNan)).to.be.false;
    });
  });
  
  describe('is.null', function () {
    it('should return true if passed parameter type is null', function () {
      expect(is.null(null)).to.be.true;
	});
    it("should return false if passed parameter type is not null", function () {
		var notNull = 'mayeul';
      expect(is.null(notNull)).to.be.false;
    });
  });
  
  describe('is.number', function () {
    it('should return true if passed parameter type is number', function () {
      expect(is.number(1)).to.be.true;
	});
    it("should return false if passed parameter type is not number", function () {
		var notnumber = 'mayeul';
      expect(is.number(notnumber)).to.be.false;
    });
  });
  
  describe('is.object', function () {
    it('should return true if passed parameter type is object', function () {
      expect(is.object({})).to.be.true;
	});
    it("should return false if passed parameter type is not object", function () {
		var notobject = 'mayeul';
      expect(is.object(notobject)).to.be.false;
    });
  });
  
  describe('is.json', function () {
    it('should return true if passed parameter type is json', function () {
      expect(is.object({})).to.be.true;
	});
    it("should return false if passed parameter type is not json", function () {
		var notjson = 'mayeul';
      expect(is.json(notjson)).to.be.false;
    });
  });
  
  describe('is.regexp', function () {
    it('should return true if passed parameter type is regexp', function () {
      expect(is.regexp()).to.be.true;
	});
    it("should return false if passed parameter type is not regexp", function () {
		var notregexp = 'mayeul';
      expect(is.regexp(notregexp)).to.be.false;
    });
  });
  
  describe('is.sameType', function () {
    it('should return true if passed parameter type is sameType', function () {
		var bool1 = true;
		var bool2 = true;
      expect(is.sameType(var1,var2)).to.be.true;
	});
    it("should return false if passed parameter type is not sameType", function () {
		var notsameType1 = 'mayeul';
		var notsameType2 = true;
      expect(is.sameType(notsameType1,notsameType2)).to.be.false;
    });
  });
  
  describe('is.string', function () {
    it('should return true if passed parameter type is string', function () {
      expect(is.string("bob")).to.be.true;
	});
    it("should return false if passed parameter type is not string", function () {
		var notstring = true;
      expect(is.string(notstring)).to.be.false;
    });
  });
  
  describe('is.char', function () {
    it('should return true if passed parameter type is char', function () {
      expect(is.char("A")).to.be.true;
	});
    it("should return false if passed parameter type is not char", function () {
		var notchar = true;
      expect(is.char(notchar)).to.be.false;
    });
  });
  
  describe('is.undefined', function () {
    it('should return true if passed parameter type is undefined', function () {
      expect(is.undefined()).to.be.true;
	});
    it("should return false if passed parameter type is not undefined", function () {
		var notundefined = true;
      expect(is.undefined(notundefined)).to.be.false;
    });
  });
  
});
