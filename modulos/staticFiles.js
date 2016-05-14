module.exports = (app, express) => {
    return {
      configFiles: (directories) => {
          directories.forEach(function(directorie){
            app.use(express.static(directorie));              
          });
      }  
    };
}