import { Selector } from 'testcafe';
import { should } from 'chai';

should();

fixture`Getting Started`
    .page`./target/index.html`; 


test('Test Hello', async t => {
    await t
        .typeText('#test-target input', 'Hello')
        .click('#test-target .increase')
        .click('#test-target .increase')
        .click('#test-target .increase');
    let text = await Selector('#test-target .output').innerText;
    text.trim().should.be.equal('Hello Hello Hello 2');
});