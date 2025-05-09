import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    'profile-pictures/{entity_id}/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'picture-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  }),
  isDefault: true,
});


export const secondStorage = defineStorage({
  name: 'amplify-test-bucket-oshan-1',
  access: (allow) => ({
    '*': [
      allow.authenticated.to(['read', 'write', 'delete'])
    ]
  })
});