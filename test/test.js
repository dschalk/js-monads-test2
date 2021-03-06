var assert = chai.assert;

describe('Compare m1 and m2 by m1.x === m2.x && m1.id === m2.id', function() {
  describe('Click a test to see the code:', function () {
    it(`
      Compare O.m and O.m.bnd(m.ret) 
      `,
       function () {
         assert.equal( O.m.x, O.m.bnd(m.ret).x );  
         assert.equal( O.m.id, O.m.bnd(m.ret).id );
    });
    it(`
      Compare ret(5) and ret(ret(5).x) 
      `,
       function () {
         assert.equal( ret(5).x, ret(ret(5).x).x );
         assert.equal( ret(5).id, ret(ret(5).x).id );
    });
    it(`
      Compare ret(0).bnd(add, 3).bnd(cube) and ret(0).bnd(v => add(v, 3)).bnd(cube)
      `,
       function () {
         assert.equal( ret(0).bnd(add, 3).bnd(cube).x, ret(0).bnd(v => add(v, 3).bnd(cube)).x );
         assert.equal( ret(0).bnd(add, 3).bnd(cube).id, ret(0).bnd(v => add(v, 3).bnd(cube)).id );
    });
  });
});


