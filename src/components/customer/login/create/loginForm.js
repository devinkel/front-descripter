export default {
    fields: [
        {
            name: 'email',
            label: 'E-mail',
            type: 'email',
            placeholder: 'Digite seu e-mail',
            value: '',
            rules: 'email'
        },
        {
            name: 'password',
            label: 'PasswordLogin',
            type: 'password',
            placeholder: 'Digite sua senha',
            value: '',
            rules: 'required'
        }
    ]
}