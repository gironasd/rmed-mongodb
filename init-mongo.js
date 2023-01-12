db.createUser(
    {
        user: 'chandra',
        pwd: 'Prism2020',
        roles: [
            {
                role: 'readWrite',
                db: 'rmed-be'
            }
        ]
    }
)