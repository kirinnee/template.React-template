module.exports = {
    input: {
        BusinessRegistrationForm: './src/BusinessRegistrationForm_index.tsx',
        CoordinatorRegistrationForm: './src/CoordinatorRegistrationForm_index.tsx',
        AdminRegistrationForm: './src/AdminRegistrationForm_index.tsx'
    },
    htmls: [
        {
            filename: 'BusinessRegistrationForm.html',
            title: 'Home',
            template: 'index.html',
            chunks: ['BusinessRegistrationForm']
        },
        {
            filename: 'CoordinatorRegistrationForm.html',
            title: 'Home',
            template: 'index.html',
            chunks: ['CoordinatorRegistrationForm']
        },
        {
            filename: 'AdminRegistrationForm.html',
            title: 'Home',
            template: 'index.html',
            chunks: ['AdminRegistrationForm']
        }
    ]
};