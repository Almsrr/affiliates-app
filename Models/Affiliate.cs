using System;

namespace AffiliatesApp.Models
{
    public class Affiliate
    {
        public Affiliate()
        {
            RegistrationDate = DateTime.Now;
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Birthday { get; set; }
        public char Gender { get; set; }
        public string IdCard { get; set; }
        public string SecuritySocialNumber { get; set; }
        public DateTime RegistrationDate { get; set; }
        public double ConsumedAmount { get; set; }
        public int StatusId { get; set; }
        public int PlanId { get; set; }
    }
}