describe('Underscore', function() {
  
  describe('#sum', function() {
    it('should add values', function() {
      expect( _.sum([ 1, 2, 3 ]) ).toEqual(6);      
    });
    
    it('should ignore nulls', function() {
      expect( _.sum([ null, undefined, 1 ]) ).toEqual(1);
    });
    
    it('should be undefined if empty', function() {
      expect( _.sum([]) ).toEqual(undefined);
    });
    
    it('should return undefined if collection falsey', function() {
      expect( _.sum([ null, 'string' ]) ).toEqual(undefined);
      expect( _.sum(null) ).toEqual(undefined);
    });
  });
  
  describe('#average', function() {
    it('should average values', function() {
      expect( _.average([ 1, 2, 3 ]) ).toEqual(2);
    });
    
    it('should not consider nulls', function() {
      expect( _.average([ null, undefined, 2 ]) ).toEqual(2);
    });
    
    it('should consider 0', function() {
      expect( _.average([ 0, 2 ]) ).toEqual(1);
    });
    
    it('should be undefined if empty', function() {
      expect( _.average([]) ).toEqual(undefined);
    });
  });
  
  describe('#maximum', function() {
    it('should get max value', function() {
      expect( _.maximum([ 1, 2, 3 ]) ).toEqual(3);
    });
    
    it('should not consider nulls', function() {
      expect( _.maximum([ null, undefined, 2 ]) ).toEqual(2);
    });
    
    it('should consider 0', function() {
      expect( _.maximum([ 0, -1 ]) ).toEqual(0);
    });
    
    it('should be undefined if empty', function() {
      expect( _.maximum([]) ).toEqual(undefined);
    });
  });
  
  describe('#minimum', function() {
    it('should get min value', function() {
      expect( _.minimum([ 1, 2, 3 ]) ).toEqual(1);
    });
    
    it('should not consider nulls', function() {
      expect( _.minimum([ null, undefined, 2 ]) ).toEqual(2);
    });
    
    it('should consider 0', function() {
      expect( _.minimum([ 0, 1 ]) ).toEqual(0);
    });
    
    it('should be undefined if empty', function() {
      expect( _.minimum([]) ).toEqual(undefined);
    });
  });

});
