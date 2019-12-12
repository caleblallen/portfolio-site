export const environment = {
  production: true,
  port: 65001,
  certificate: {
    key: '/etc/letsencrypt/live/caleballen.com/privkey.pem',
    cert: '/etc/letsencrypt/live/caleballen.com/fullchain.pem'
  },
  projectsURL: 'https://tinydragon.dev/projectsAPI/getProjects'
};
