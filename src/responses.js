const users = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getTeam = (request, response, params) => {
  //  console.log(params.teamName);

  if (params.teamName === 'all') {
    return respondJSON(request, response, 200, users);
  }
  const returnTeam = params.teamName;
  return respondJSON(request, response, 200, users[returnTeam]);
};

const addTeam = (request, response, body) => {
  const responseJSON = {
    message: 'Name and Team Members is required',
  };

  if (!body.teamName || !body.teamMembers) {
    responseJSON.id = 'missingParams';
    return respondJSON(request, response, 400, responseJSON);
  }

  let responseCode = 201; // created

  if (users[body.teamName]) {
    responseCode = 204; // updated
  } else {
    users[body.teamName] = {}; // creates new json obj
    users[body.teamName].teamName = body.teamName;
    users[body.teamName].numMembers = body.numMembers;
    users[body.teamName].teamMembers = body.teamMembers;
    //    user[body.team].logo = body.logo;
  }

  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully';
    return respondJSON(request, response, responseCode, responseJSON);
  }

  return respondJSONMeta(request, response, responseCode);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'Page was not found!',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => respondJSONMeta(request, response, 404);

module.exports = {
  getTeam,
  addTeam,
  notFound,
  notFoundMeta,
};
