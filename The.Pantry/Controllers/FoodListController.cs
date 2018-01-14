using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace The.Pantry.Controllers
{
    public class FoodListItem
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public Int16 Quantity { get; set; }

        public FoodListItem(string name, DateTime date, string location, Int16 quantity)
        {
            Name = name;
            Date = date;
            Location = location;
            Quantity = quantity;
        }
    }

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class FoodListController : Controller
    {
        [HttpGet]
        public IEnumerable<FoodListItem> Get()
        {
            List<FoodListItem> list = new List<FoodListItem>();
            list.Add(new FoodListItem("spaghetti", new DateTime(), "diepvries", 5));
            list.Add(new FoodListItem("stoofvlees", new DateTime(), "diepvries", 1));
            list.Add(new FoodListItem("couscous met worst", new DateTime(), "diepvries", 1));

            return list;
        }
    }
}
