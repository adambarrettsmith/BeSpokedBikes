using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BeSpokedBikes.Data;

namespace BeSpokedBikes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesPersonController : ControllerBase
    {
        private readonly BeSpokedBikesDbContext _context;

        public SalesPersonController(BeSpokedBikesDbContext context)
        {
            _context = context;
        }

        // GET: api/SalesPerson
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SalesPeople>>> GetSalesPeople()
        {
            return await _context.SalesPeople.ToListAsync();
        }

        // GET: api/SalesPerson/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SalesPeople>> GetSalesPeople(int id)
        {
            var salesPeople = await _context.SalesPeople.FindAsync(id);

            if (salesPeople == null)
            {
                return NotFound();
            }

            return salesPeople;
        }

        // PUT: api/SalesPerson/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesPeople(int id, SalesPeople salesPeople)
        {
            if (id != salesPeople.Id)
            {
                return BadRequest();
            }

            _context.Entry(salesPeople).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesPeopleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/SalesPerson
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SalesPeople>> PostSalesPeople(SalesPeople salesPeople)
        {
            _context.SalesPeople.Add(salesPeople);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalesPeople", new { id = salesPeople.Id }, salesPeople);
        }

        // DELETE: api/SalesPerson/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SalesPeople>> DeleteSalesPeople(int id)
        {
            var salesPeople = await _context.SalesPeople.FindAsync(id);
            if (salesPeople == null)
            {
                return NotFound();
            }

            _context.SalesPeople.Remove(salesPeople);
            await _context.SaveChangesAsync();

            return salesPeople;
        }

        private bool SalesPeopleExists(int id)
        {
            return _context.SalesPeople.Any(e => e.Id == id);
        }
    }
}
