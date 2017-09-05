function HelpfulService()
{
	var me = this;

	this.add = function(intA, intB)
	{
		return parseInt(intA) + parseInt(intB);
	}

	this.subtract = function(intA, intB)
	{
		return parseInt(intA) - parseInt(intB);
	}

	this.getEnv = function()
	{
		return {
			'GATEWAY_URL' : process.env.GATEWAY_URL
		}
	}

}


module.exports = HelpfulService;