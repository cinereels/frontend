import React, { useState } from 'react';
import { Container, Display, FormContainer, Form, FormWrapper, Wrapper, Photo, AuthOptions, Helper, SwitchButton, SwitchText } from './styles';
import { IoLogoGoogle, IoLogoFacebook, IoLogoApple } from 'react-icons/io5';
import { Input, Button } from '../../UI';
import Brand from '../../components/brand';
import FeaturedButton from '../../components/featured-button';
import Spacer from '../../components/spacer';
import bg from '../../images/backgrounds/jeff-pierre-5X5I20O_Vbg-unsplash.jpg';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const AuthPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const iconSize = 30;

    const toggleAuthMode = () => {
        setIsLogin(prevState => !prevState);
    }

    const authLogin = async () => {
        setIsLoading(true);
        try {
            await dispatch(login({ email, password }));
            setIsLoading(false);
            history.push('/');
        } catch (err) {
            setIsLoading(false);
        }
    }

    const authSignup = async () => {
        if (password !== passwordConfirm) {
            return;
        }

        setIsLoading(true);

        try {
            await dispatch(signup({ email, password }));
            setIsLoading(false);
            history.push('/');
        } catch (err) {
            setIsLoading(false);
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if (isLogin) {
            authLogin();
        } else {
            authSignup();
        }
    }

    return (
        <Container>
            <Wrapper>
                <Display>
                    <Photo src={bg} />
                </Display>
                <FormContainer>
                    <Form onSubmit={submit}>
                        <FormWrapper>
                            <Brand size={40} />
                            <Spacer type={'vertical'} size={40} />
                            <Input
                                placeholder={'Email'}
                                value={email}
                                setValue={setEmail}
                            />
                            <Spacer type={'vertical'} size={40} />
                            <Input
                                type={'password'}
                                placeholder={'Password'}
                                value={password}
                                setValue={setPassword}
                            />
                            {
                                !isLogin &&
                                <React.Fragment>
                                    <Spacer type={'vertical'} size={40} />
                                    <Input
                                        type={'password'}
                                        placeholder={'Confirm Password'}
                                        value={passwordConfirm}
                                        setValue={setPasswordConfirm}
                                    />
                                </React.Fragment>
                            }
                            <Spacer type={'vertical'} size={100} />
                            <AuthOptions>
                                <IoLogoGoogle
                                    color={'#fff'}
                                    size={iconSize}
                                />
                                <Spacer type={'horizontal'} size={40} />
                                <IoLogoFacebook
                                    color={'#fff'}
                                    size={iconSize}
                                />
                                <Spacer type={'horizontal'} size={40} />
                                <IoLogoApple
                                    color={'#fff'}
                                    size={iconSize + 5}
                                />
                            </AuthOptions>
                            <Spacer type={'vertical'} size={40} />
                            <div style={{ flex: 1 }} />
                            <FeaturedButton block textSize={18} type={'submit'}>
                                {isLogin ? 'Login' : 'Signup'}
                            </FeaturedButton>
                            <Spacer type={'vertical'} size={40} />
                            <Helper>
                                <SwitchText>
                                    { isLogin ? 'Not a member ? ' : 'Already a member ? ' }
                                </SwitchText>
                                <Spacer type={'horizontal'} size={5} />
                                <SwitchButton onClick={toggleAuthMode}>
                                    { isLogin ? 'Signup' : 'Login' }
                                </SwitchButton>
                            </Helper>
                        </FormWrapper>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default AuthPage;