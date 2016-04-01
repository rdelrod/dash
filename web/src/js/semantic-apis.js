$.fn.api.settings.api = {
  'request access': 'http://mc.jaredallard.me:8300/auth/tfa/{username}',
  'get usage': 'http://mc.jaredallard.me:8300/server/usage/all'
};

$.fn.api.settings.successTest = function(response) {
  if(response && response.success) {
    return response.success;
  }
  return false;
};
