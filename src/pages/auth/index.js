import React, { useState } from 'react';
import { Container, Display, FormContainer, Form, FormWrapper, Wrapper, Photo, AuthOptions, Helper, SwitchButton, SwitchText, ErrorContainer, ErrorText } from './styles';
import { IoLogoGoogle, IoLogoFacebook, IoLogoApple } from 'react-icons/io5';
import { Input, Button } from '../../UI';
import Brand from '../../components/brand';
import FeaturedButton from '../../components/featured-button';
import Spacer from '../../components/spacer';
import bg from '../../images/backgrounds/jeff-pierre-5X5I20O_Vbg-unsplash.jpg';
import bg1 from '../../images/backgrounds/9wzdncrfj3tj-background.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup, verify } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import { getErrorMsg } from '../../utility/error-config';

const AuthPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const verifierId = useSelector(state => state.ath.verifierId);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const [error, setError] = useState();

    const [isLogin, setIsLogin] = useState(true);
    const [pageIndex, setPageIndex] = useState('login');
    const [isLoading, setIsLoading] = useState(false);

    const iconSize = 30;

    const moveToLogin = () => {
        setPageIndex('login');
    }

    const moveToSignup = () => {
        setPageIndex('signup');
    }

    const moveToVerifier = () => {
        setPageIndex('verifier');
    }

    const authLogin = async () => {
        setIsLoading(true);
        try {
            await dispatch(login({ email, password }));
            setIsLoading(false);
            history.push('/');
        } catch (err) {
            setIsLoading(false);
            setError(getErrorMsg(err, 'Error Logging In!'));
        }
    }

    const authSignup = async () => {
        setIsLoading(true);

        try {
            await dispatch(signup({ email, password, verifierId, verificationCode }));
            setIsLoading(false);
            history.push('/');
        } catch (err) {
            setIsLoading(false);
            setError(getErrorMsg(err, 'Error Signing Up!'));
        }
    }

    const authVerifier = async () => {
        setIsLoading(true);

        if (password !== passwordConfirm) {
            setIsLoading(false);
            setError('Passwords are not matching!');
            return;
        }

        try {
            await dispatch(verify({ email, password }));
            setIsLoading(false);
            moveToVerifier();
        } catch (err) {
            setIsLoading(false);
            setError(getErrorMsg(err, 'Error verifying email!'));
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if (pageIndex === 'login') {
            authLogin();
        } else if(pageIndex === 'signup') {
            authVerifier();
        } else if (pageIndex === 'verifier') {
            authSignup();
        }
    }


    const pages = {
        'login': <FormWrapper>
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
            {error && <ErrorContainer>
                <ErrorText>{error}</ErrorText>
            </ErrorContainer>}
            <Spacer type={'vertical'} size={40} />
            {/* <div style={{ flex: 1 }} /> */}
            <FeaturedButton block textSize={18} type={'submit'} loading={isLoading}>
                Login
            </FeaturedButton>
            <Spacer type={'vertical'} size={40} />
            <Helper>
                <SwitchText>
                    Not a member ?
                </SwitchText>
                <Spacer type={'horizontal'} size={5} />
                <SwitchButton onClick={moveToSignup}>
                    Signup
                </SwitchButton>
            </Helper>
        </FormWrapper>,
        'signup': <FormWrapper>
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
            <React.Fragment>
                <Spacer type={'vertical'} size={40} />
                <Input
                    type={'password'}
                    placeholder={'Confirm Password'}
                    value={passwordConfirm}
                    setValue={setPasswordConfirm}
                />
            </React.Fragment>
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
            {error && <ErrorContainer>
                <ErrorText>{error}</ErrorText>
            </ErrorContainer>}
            <Spacer type={'vertical'} size={40} />
            {/* <div style={{ flex: 1 }} /> */}
            <FeaturedButton block textSize={18} type={'submit'} loading={isLoading}>
                Signup
            </FeaturedButton>
            <Spacer type={'vertical'} size={40} />
            <Helper>
                <SwitchText>
                    Already a member ?
                </SwitchText>
                <Spacer type={'horizontal'} size={5} />
                <SwitchButton onClick={moveToLogin}>
                    Login
                </SwitchButton>
            </Helper>
        </FormWrapper>,
        'verifier': <FormWrapper>
            <Brand size={40} />
            <Spacer type={'vertical'} size={40} />
            <Input
                placeholder={'Verification Code'}
                value={verificationCode}
                setValue={setVerificationCode}
                type="number"
            />
            <Spacer type={'vertical'} size={40} />
            {error && <ErrorContainer>
                <ErrorText>{error}</ErrorText>
            </ErrorContainer>}
            <Spacer type={'vertical'} size={40} />
            {/* <div style={{ flex: 1 }} /> */}
            <FeaturedButton block textSize={18} type={'submit'} loading={isLoading}>
                Confirm
            </FeaturedButton>
            <Spacer type={'vertical'} size={40} />
            <Helper>
                <SwitchText>
                    Already a member ?
                </SwitchText>
                <Spacer type={'horizontal'} size={5} />
                <SwitchButton onClick={moveToLogin}>
                    Login
                </SwitchButton>
            </Helper>
        </FormWrapper>
    };



    return (
        <Container>
            <Wrapper>
                <Display>
                    <Photo src={bg1} />
                </Display>
                <FormContainer>
                    <Form onSubmit={submit}>
                        {pages[pageIndex]}
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}

export default AuthPage;