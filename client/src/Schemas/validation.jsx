import * as Yup from 'yup'

export const formValidationSchema = Yup.object({
    username : Yup.string()
        .required("Please enter your name")
        .min(2, "Name should not be less than 2 characters")
        .max(25, "maximum 25 characters")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .trim('The name cannot include spaces'),

    useremail: Yup.string()
        .required("Please enter your email")
        .trim('The email cannot include spaces')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email"),

    usermessage: Yup.string()
        .required("Comment field should not be empty ")
        .min(4, "Please leave a comment of atleast 4 characters")
        .trim('The comment cannot include spaces'),
})