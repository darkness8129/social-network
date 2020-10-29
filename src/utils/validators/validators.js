// field is required
export const required = (value) => {
    return !value ? 'field is required' : undefined;
}

// max length of text in field
export const maxLength = (length) => (value) => {
    return value && value.length > length ? `max length is ${length} symbols` : undefined;
}
