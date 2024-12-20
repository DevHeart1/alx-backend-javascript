const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" to the console and be called once', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" to the console and be called once', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});