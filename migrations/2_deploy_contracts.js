var User=artifacts.require("User.sol");
var Driver=artifacts.require("Driver.sol");
var SafeMath=artifacts.require("SafeMath.sol");
var Ownable=artifacts.require("Ownable.sol");

module.exports = function(deployer) {
      deployer.deploy(User);
      deployer.deploy(Driver);
      deployer.deploy(SafeMath);
      deployer.deploy(Ownable);
}