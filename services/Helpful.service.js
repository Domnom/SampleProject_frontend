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

}


module.exports = HelpfulService;