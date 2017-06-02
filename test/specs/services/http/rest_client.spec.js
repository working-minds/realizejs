import Realize from 'realize';
import { RestClient, defaultHttpClient } from 'services/http'

describe('rest_client', () => {
    let restClient;
    const httpClientStub = sinon.stub(Realize.config, 'httpClient');
    const defaultMethod = 'GET';
    const defaultData = { customData: 'teste' };
    const defaultMergedParameters = {
        method: defaultMethod,
        data: defaultData
    };
    beforeEach(() => {
        restClient = new RestClient({})
        Realize.config.httpClient = httpClientStub;
    });

    describe('#constructor', () => {
        it('must receive an options object', () => {
            
        })
    });
    
    describe('#request', () => {
        let mergeRequestParametersStub;
        beforeEach(() => mergeRequestParametersStub = sinon.stub(restClient, 'mergeRequestParameters'));
        it('should call default http client when config not set', () => {
            restClient.request();
            expect(httpClientStub).to.be.calledOnce;
        });

        it('should call custom http client when set', () => {
            const customHttpClient = sinon.stub();
            Realize.config.httpClient = customHttpClient;
            restClient.request();
            expect(customHttpClient).to.be.calledOnce;
        });

        it('should call with merged parameters and url', () => {
            let url = 'url';
            let defaultOptions = {};
            mergeRequestParametersStub.withArgs(defaultMethod, defaultData, defaultOptions).returns(defaultMergedParameters);
            restClient.request(url, defaultMethod, defaultData, defaultOptions);
            expect(httpClientStub).to.have.been.calledWith(url, defaultMergedParameters);
        });
    });

    describe('#mergeRequestParameters', () => {
        it('should merge the parameters without options', () => {
            const result = restClient.mergeRequestParameters(defaultMethod, defaultData);
            expect(result).to.be.eql({
                method: defaultMethod,
                data: defaultData
            });
        });

        it('should merge the parameters with options', () => {
            const customOptions = { testOption: 'test' };
            const result = restClient.mergeRequestParameters(defaultMethod, defaultData, customOptions);
            expect(result).to.be.eql({
                method: defaultMethod,
                data: defaultData,
                testOption: 'test'
            });
        });
    });
    
});