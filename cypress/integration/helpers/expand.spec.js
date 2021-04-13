import { expand } from '../../../public/js/helpers/expand'

describe('expand', function () {
  const context = {
    'a': 'http://a.com/'
  }
  it('should expand a collapsed string', function () {
    expect(expand('a:test', context)).to.equal('http://a.com/test')
  })
})