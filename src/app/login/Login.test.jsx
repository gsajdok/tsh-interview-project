import React from 'react';

import { render } from '../../tests';
import {Login} from "./Login";
import {fireEvent} from "@testing-library/react";


describe("Form", () => {
  it("should render required elements", () => {
    let renderedPage = render(<Login/>);

    expect(
        renderedPage.container.querySelector('.login__form h3')
    ).toBeInTheDocument();
    expect(
        renderedPage.container.querySelector('.login__form input[name="username"')
    ).toBeInTheDocument();
    expect(
        renderedPage.container.querySelector('.login__form input[name="password"]')
    ).toBeInTheDocument();
    expect(
        renderedPage.container.querySelector('.login__form .login__button input[type="submit"]')
    ).toBeInTheDocument();
    expect(
        renderedPage.container.querySelector('.login__box .login__link')
    ).toBeInTheDocument();
  });

  it("inputs should accept valid input and not show errors", () => {
    let renderedPage = render(<Login/>);
    const usernameInput = renderedPage.container.querySelector('.login__form input[name="username"]');
    const passwordInput = renderedPage.container.querySelector('.login__form input[name="password"]');
    const submitInput = renderedPage.container.querySelector('.login__form .login__button input[type="submit"]')

    fireEvent.change(usernameInput, {target: {value: 'testusername'}})
    fireEvent.change(passwordInput, {target: {value: 'testpassword'}})
    fireEvent.click(submitInput);
    expect(usernameInput.value).toBe('testusername');
    expect(passwordInput.value).toBe('testpassword');
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(0)
  })

  it("Should return errors if invalid input", () => {
    let renderedPage = render(<Login/>);
    const usernameInput = renderedPage.container.querySelector('.login__form input[name="username"]');
    const passwordInput = renderedPage.container.querySelector('.login__form input[name="password"]');
    const submitInput = renderedPage.container.querySelector('.login__form .login__button input[type="submit"]')

    fireEvent.change(usernameInput, {target: {value: 'fineusername'}})
    fireEvent.change(passwordInput, {target: {value: 'short'}})
    fireEvent.click(submitInput);
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(1)
    fireEvent.change(usernameInput, {target: {value: 'abc'}})
    fireEvent.change(passwordInput, {target: {value: 'short'}})
    fireEvent.click(submitInput);
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(2)
    fireEvent.change(usernameInput, {target: {value: 'abc'}})
    fireEvent.change(passwordInput, {target: {value: 'finepassword'}})
    fireEvent.click(submitInput);
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(1)
    fireEvent.change(usernameInput, {target: {value: 'definitelytoolongofanusername'}})
    fireEvent.change(passwordInput, {target: {value: 'finepassword'}})
    fireEvent.click(submitInput);
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(1)
  })

  it("Errors disappear on changing input", () => {
    let renderedPage = render(<Login/>);
    const usernameInput = renderedPage.container.querySelector('.login__form input[name="username"]');
    const passwordInput = renderedPage.container.querySelector('.login__form input[name="password"]');
    const submitInput = renderedPage.container.querySelector('.login__form .login__button input[type="submit"]')
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(0)
    fireEvent.change(usernameInput, {target: {value: 'abc'}})
    fireEvent.change(passwordInput, {target: {value: 'short'}})
    fireEvent.click(submitInput);
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(2)
    fireEvent.change(usernameInput, {target: {value: 'propername'}})
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(1)
    fireEvent.change(passwordInput, {target: {value: 'short1'}})
    expect(renderedPage.container.querySelectorAll('.error').length).toBe(0)
  });
});