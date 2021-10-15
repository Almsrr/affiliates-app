using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using AffiliatesApp.Models;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Collections.Generic;
using System.Text.Json;

namespace AffiliatesApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AffiliatesController : ControllerBase
    {
        private readonly IConfiguration _config;
        private string cs;


        public AffiliatesController(IConfiguration config)
        {
            _config = config;
            cs = _config.GetConnectionString("DefaultConnection");
        }


        [HttpGet]
        public List<Affiliate> GetAffiliates()
        {
            List<Affiliate> affiliates = new List<Affiliate>();

            try
            {
                using (SqlConnection connection = new SqlConnection(cs))
                {
                    SqlCommand command = new SqlCommand("GetAffiliates", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Affiliate affiliate = new Affiliate()
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            Birthday = reader["Birthday"].ToString(),
                            Gender = char.Parse(reader["Gender"].ToString()),
                            IdCard = reader["IdCard"].ToString(),
                            SecuritySocialNumber = reader["SecuritySocialNumber"].ToString(),
                            RegistrationDate = Convert.ToDateTime(reader["RegistrationDate"]),
                            ConsumedAmount = Convert.ToDouble(reader["ConsumedAmount"]),
                            StatusId = Convert.ToInt32(reader["Status"]),
                            PlanId = Convert.ToInt32(reader["Plan"])

                        };
                        affiliates.Add(affiliate);
                    }
                }
            }
            catch (System.Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return affiliates;



        }

        [HttpGet("{id}")]
        public Affiliate GetAffiliate(int id)
        {
            Affiliate affiliate = new Affiliate();
            try
            {
                using (SqlConnection connection = new SqlConnection(cs))
                {
                    SqlCommand command = new SqlCommand("GetAffiliate", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    // SqlParameter param = new SqlParameter("@Id", SqlDbType.Int);
                    // param.Value = id;
                    command.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = id;

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        affiliate.Id = Convert.ToInt32(reader["Id"]);
                        affiliate.FirstName = reader["FirstName"].ToString();
                        affiliate.LastName = reader["LastName"].ToString();
                        affiliate.Birthday = reader["Birthday"].ToString();
                        affiliate.Gender = char.Parse(reader["Gender"].ToString());
                        affiliate.IdCard = reader["IdCard"].ToString();
                        affiliate.SecuritySocialNumber = reader["SecuritySocialNumber"].ToString();
                        affiliate.RegistrationDate = Convert.ToDateTime(reader["RegistrationDate"]);
                        affiliate.ConsumedAmount = Convert.ToDouble(reader["ConsumedAmount"]);
                        affiliate.StatusId = Convert.ToInt32(reader["Status"]);
                        affiliate.PlanId = Convert.ToInt32(reader["Plan"]);
                    }
                }
            }
            catch (System.Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return affiliate;
        }

        [HttpPost]
        public void CreateAffiliate(Affiliate affiliate)
        {
            using (SqlConnection connection = new SqlConnection(cs))
            {

                try
                {

                    SqlCommand command = new SqlCommand("CreateAffiliate", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.Add(new SqlParameter("@FirstName", SqlDbType.NVarChar)).Value = affiliate.FirstName;
                    command.Parameters.Add(new SqlParameter("@LastName", SqlDbType.NVarChar)).Value = affiliate.LastName;
                    command.Parameters.Add(new SqlParameter("@Birthday", SqlDbType.DateTime)).Value = affiliate.Birthday;
                    command.Parameters.Add(new SqlParameter("@Gender", SqlDbType.Char)).Value = affiliate.Gender;
                    command.Parameters.Add(new SqlParameter("@IdCard", SqlDbType.NVarChar)).Value = affiliate.IdCard;
                    command.Parameters.Add(new SqlParameter("@SecuritySocialNumber", SqlDbType.NVarChar)).Value = affiliate.SecuritySocialNumber;
                    command.Parameters.Add(new SqlParameter("@RegistrationDate", SqlDbType.DateTime)).Value = affiliate.RegistrationDate;
                    command.Parameters.Add(new SqlParameter("@ConsumedAmount", SqlDbType.Int)).Value = affiliate.ConsumedAmount;
                    command.Parameters.Add(new SqlParameter("@Status", SqlDbType.Int)).Value = affiliate.StatusId;
                    command.Parameters.Add(new SqlParameter("@Plan", SqlDbType.Int)).Value = affiliate.PlanId;

                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (System.Exception e)
                {
                    Console.WriteLine(e);
                }
            }
        }

        [HttpPut()]
        public void UpdateAffiliate(Affiliate affiliate)
        {
            using (SqlConnection connection = new SqlConnection(cs))
            {
                try
                {
                    SqlCommand command = new SqlCommand("UpdateAffiliate", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = affiliate.Id;
                    command.Parameters.Add(new SqlParameter("@FirstName", SqlDbType.NVarChar)).Value = affiliate.FirstName;
                    command.Parameters.Add(new SqlParameter("@LastName", SqlDbType.NVarChar)).Value = affiliate.LastName;
                    command.Parameters.Add(new SqlParameter("@Birthday", SqlDbType.DateTime)).Value = affiliate.Birthday;
                    command.Parameters.Add(new SqlParameter("@Gender", SqlDbType.Char)).Value = affiliate.Gender;
                    command.Parameters.Add(new SqlParameter("@IdCard", SqlDbType.NVarChar)).Value = affiliate.IdCard;
                    command.Parameters.Add(new SqlParameter("@SecuritySocialNumber", SqlDbType.NVarChar)).Value = affiliate.SecuritySocialNumber;
                    command.Parameters.Add(new SqlParameter("@RegistrationDate", SqlDbType.DateTime)).Value = affiliate.RegistrationDate;
                    command.Parameters.Add(new SqlParameter("@ConsumedAmount", SqlDbType.Int)).Value = affiliate.ConsumedAmount;
                    command.Parameters.Add(new SqlParameter("@Status", SqlDbType.Int)).Value = affiliate.StatusId;
                    command.Parameters.Add(new SqlParameter("@Plan", SqlDbType.Int)).Value = affiliate.PlanId;

                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (System.Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }

        [HttpDelete()]
        public void Delete(int id)
        {
            using (SqlConnection connection = new SqlConnection(cs))
            {
                try
                {
                    SqlCommand command = new SqlCommand("DeleteAffiliate", connection);
                    command.CommandType = CommandType.StoredProcedure;

                    command.Parameters.Add(new SqlParameter("@Id", SqlDbType.Int)).Value = id;
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (System.Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
        }

        [HttpGet]
        [Route("actives")]
        public List<Affiliate> GetActiveAffiliates()
        {
            List<Affiliate> affiliates = new List<Affiliate>();

            try
            {
                using (SqlConnection connection = new SqlConnection(cs))
                {
                    SqlCommand command = new SqlCommand("GetActivesAffiliates", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Affiliate affiliate = new Affiliate()
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            Birthday = reader["Birthday"].ToString(),
                            Gender = char.Parse(reader["Gender"].ToString()),
                            IdCard = reader["IdCard"].ToString(),
                            SecuritySocialNumber = reader["SecuritySocialNumber"].ToString(),
                            RegistrationDate = Convert.ToDateTime(reader["RegistrationDate"]),
                            ConsumedAmount = Convert.ToDouble(reader["ConsumedAmount"]),
                            StatusId = Convert.ToInt32(reader["Status"]),
                            PlanId = Convert.ToInt32(reader["Plan"])

                        };
                        affiliates.Add(affiliate);
                    }
                }
            }
            catch (System.Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return affiliates;



        }

        [HttpGet]
        [Route("inactives")]
        public List<Affiliate> GetInactiveAffiliates()
        {
            List<Affiliate> affiliates = new List<Affiliate>();

            try
            {
                using (SqlConnection connection = new SqlConnection(cs))
                {
                    SqlCommand command = new SqlCommand("GetInactivesAffiliates", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        Affiliate affiliate = new Affiliate()
                        {
                            Id = Convert.ToInt32(reader["Id"]),
                            FirstName = reader["FirstName"].ToString(),
                            LastName = reader["LastName"].ToString(),
                            Birthday = reader["Birthday"].ToString(),
                            Gender = char.Parse(reader["Gender"].ToString()),
                            IdCard = reader["IdCard"].ToString(),
                            SecuritySocialNumber = reader["SecuritySocialNumber"].ToString(),
                            RegistrationDate = Convert.ToDateTime(reader["RegistrationDate"]),
                            ConsumedAmount = Convert.ToDouble(reader["ConsumedAmount"]),
                            StatusId = Convert.ToInt32(reader["Status"]),
                            PlanId = Convert.ToInt32(reader["Plan"])

                        };
                        affiliates.Add(affiliate);
                    }
                }
            }
            catch (System.Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return affiliates;



        }

    }
}