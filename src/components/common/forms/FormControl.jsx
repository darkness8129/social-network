import React from 'react';
import styles from './FormControl.module.css';

const FormControl = (Element) => ({ input, meta, ...props }) => {
    return (
        <div>
            <Element
                {...input}
                {...props}
                className={meta.touched && meta.error && styles.formError}
            />
            {meta.touched && meta.error && (
                <span className={styles.formErrorMessage}>{meta.error}</span>
            )}
        </div>
    );
};

export const Textarea = FormControl('textarea');
export const Input = FormControl('input');
