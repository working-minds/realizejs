import { removeQueryString, extractQueryString } from 'utils/url'

describe('utils.url', () => {
    describe('#extractQueryString', () => {
        it('should extract query string from valid url', () => {
            const queryString = '?valid=true';
            const url = `http://localhost/app${queryString}`;
            const result = extractQueryString(url);
            expect(result).to.be.eql(queryString);
        });

        it('should return empty with non query string url', () => {
            const url = `http://localhost/app`;
            const result = extractQueryString(url);
            expect(result).to.be.eql('');
        });
    })

    describe('#removeQueryString', () => {
        it('should remove query string from a url with query string', () => {
            const baseUrl = 'localhost/app';
            const url = `http://${baseUrl}?queryString`;
            const result = removeQueryString(baseUrl);
            expect(result).to.be.eql(baseUrl);
        });

        it('should return the same url from a url without query string', () => {
            const url = `http://localhost/`;
            const result = removeQueryString(url);
            expect(result).to.be.eql(url);
        });
    })
})