import * as React from 'react';
import { shallow } from 'enzyme';
import { PasswordInput } from '../../src/FormComponents/Password';
import { Validity } from '../../src/FormComponents/Validation';

export function PasswordInputTest() {


    describe("<PasswordInput/>", () => {


        let obtainPassword = (pw: string | null) => {

        }

        let changePassword = (event: Function) => {

        }

        describe("setInvalidPasswordMessage", () => {

            let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
            let instance: PasswordInput = wrapper.instance() as PasswordInput;

            it("should set the message for invalid password", () => {
                instance.setInvalidPasswordMessage('wrong password!');
                instance.state.invalidPaswordMessage.should.equal('wrong password!');
            });
        });

        describe("setInvalidRepeatMessage", () => {
            let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
            let instance: PasswordInput = wrapper.instance() as PasswordInput;

            it("should set the message for invalid repeat", () => {
                instance.setInvalidRepeatMessage('passwords do not match');
                instance.state.invalidRepeatMessage.should.equal('passwords do not match');
            });
        });


        describe("setPassword", () => {
            let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
            let instance: PasswordInput = wrapper.instance() as PasswordInput;
            it("should set the password state", () => {
                instance.setPassword('encryptionk3y');
                instance.state.password.should.equal('encryptionk3y');
            });
        });

        describe("setRepeat", () => {
            let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
            let instance: PasswordInput = wrapper.instance() as PasswordInput;
            it("should set the repeat password state", () => {
                instance.setRepeat('encryptionk3ytoo');
                instance.state.repeatpassword.should.equal('encryptionk3ytoo');
            });
        });

        describe("isPasswordValid", () => {
           
            describe('Password shorter than 8 characters', () => {

                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result = instance.isPasswordValid('abcde');

                it('should return invalid', () => {
                    
                    result.should.equal(Validity.invalid);
                });

                it('should set the invalid password message to "Password needs to be 8 characters long"', () => {
                    instance.state.invalidPaswordMessage.should.equal('Password needs to be 8 characters long')
                });
            });



            describe('Password not alphanumeric', () => {

                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result = instance.isPasswordValid('abcdefghijk');

                it('should return invalid', () => {

                    result.should.equal(Validity.invalid);
                });

                it('should set the invalid password message to "Password needs to be alphanumeric"', () => {
                    instance.state.invalidPaswordMessage.should.equal('Password needs to be alphanumeric')
                });
            });

            describe('Password no capital letter', () => {

                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result = instance.isPasswordValid('abcdefghijk234');

                it('should return invalid', () => {

                    result.should.equal(Validity.invalid);
                });

                it('should set the invalid password message to "Password need at least 1 character in uppercase"', () => {
                    instance.state.invalidPaswordMessage.should.equal('Password need at least 1 character in uppercase')
                });
            });

            describe('Password that is secure', () => {
                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result = instance.isPasswordValid('Abcdefghijk234');

                it('should return valid', () => {
                    result.should.equal(Validity.valid);
                });
                it('should set invalid password message to ""', () => {
                    instance.state.invalidPaswordMessage.should.equal('');
                });

            });

        });

        describe("isRepeatValid", () => {

            

            describe('password and repeat are different', () => {
                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result: Validity = instance.isRepeatValid('abc', 'acd');
                it('should return invalid', () => {
                    result.should.be.equal(Validity.invalid);
                });
                it('should set message to "Passwords do not match"', () => {
                    instance.state.invalidRepeatMessage.should.be.equal('Passwords do not match');
                });

            });

            describe('password and repeat same', () => {
                let wrapper = shallow(<PasswordInput resetPassword={changePassword} getPassword={obtainPassword} />)
                let instance: PasswordInput = wrapper.instance() as PasswordInput;
                let result: Validity = instance.isRepeatValid('abc', 'abc');
                it('should return invalid', () => {
                    result.should.be.equal(Validity.valid);
                });
                it('should set message to ""', () => {
                    instance.state.invalidRepeatMessage.should.be.equal('');
                });
            });
        });
        

    });
};

