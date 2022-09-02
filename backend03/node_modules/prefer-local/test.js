const test = require('ava')
const preferLocal = require('.')

const obj = {
  foo: {
    bar: true,
    baz: false,
  },
}

test.cb('true when local is true and global is undefined', (t) => {
  t.true(preferLocal(obj, 'foo.bar'))
  t.end()
})

test.cb('false when local is false and global is undefined', (t) => {
  t.false(preferLocal(obj, 'foo.baz'))
  t.end()
})

test.cb('true when local is true and global is false', (t) => {
  t.true(preferLocal(obj, 'foo.bar', false))
  t.end()
})

test.cb('false when local is false and global is true', (t) => {
  t.false(preferLocal(obj, 'foo.baz', true))
  t.end()
})

test.cb('true when local is undefined and global is true', (t) => {
  t.true(preferLocal(obj, 'foo.bat', true))
  t.end()
})

test.cb('false when local is undefined and global is false', (t) => {
  t.false(preferLocal(obj, 'foo.bat', false))
  t.end()
})
