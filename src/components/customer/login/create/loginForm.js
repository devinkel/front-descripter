import * as Yup from 'yup';
export default {
    fields: [
        {
            name: 'email',
            label: 'E-mail',
            type: 'email',
            placeholder: 'Digite seu e-mail',
            value: '',
            rules: Yup.string().email('must be a valid email').required()
        },
        {
            name: 'password',
            label: 'PasswordLogin',
            type: 'password',
            placeholder: 'Digite sua senha',
            value: '',
        }
    ]
}