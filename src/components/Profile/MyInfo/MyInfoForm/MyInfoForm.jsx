import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../common/forms/FormControl';

const MyInfoForm = ({ handleSubmit, contacts }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='My name'
                    component={Input}
                    name='fullName'
                    validate={[]}
                />
            </div>
            <div>
                <Field
                    placeholder='About me'
                    component={Input}
                    name='aboutMe'
                    validate={[]}
                />
            </div>
            <div>
                Looking for a job:
                <Field
                    component={Input}
                    name='lookingForAJob'
                    validate={[]}
                    type='checkbox'
                />
            </div>
            <div>
                <Field
                    placeholder='My skills'
                    component={Input}
                    name='lookingForAJobDescription'
                    validate={[]}
                />
            </div>
            <div>
                Contacts:
                {Object.keys(contacts).map((key) => {
                    return (
                        <div key={key}>
                            {key}
                            <Field
                                placeholder={`${key} link`}
                                component={Input}
                                name={`contacts.${key}`}
                                validate={[]}
                            />
                        </div>
                    );
                })}
            </div>
            <button>Save changes</button>
        </form>
    );
};

const ReduxEditProfileForm = reduxForm({
    form: 'editProfileForm',
})(MyInfoForm);

export default ReduxEditProfileForm;
