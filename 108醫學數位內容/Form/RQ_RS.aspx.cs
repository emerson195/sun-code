using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using System.IO;


namespace Test1
{
	/// <summary>
	/// RQToDB 的摘要描述。
	/// </summary>
	public partial class RQToDB : System.Web.UI.Page
	{
		protected void Page_Load(object sender, System.EventArgs e)
		{
		
			string[] fieldnames, fieldvalues;
            string RetStr;
            RetStr = "";
			int datacounts = Request.Form.Count;
			fieldnames = new string[datacounts];
			fieldvalues = new string[datacounts];
			
            Response.Write(" 您好，您填的表單資料如下: <br><br>");
            
            for (int i = 0; i < datacounts; i++)
			{
              
				fieldnames[i] = Request.Form.GetKey(i).ToString();
                fieldvalues[i] = Request.Form.GetValues(i)[0].ToString();
                RetStr =  fieldnames[i] + " : ";
                RetStr = RetStr + fieldvalues[i];
                Response.Write(RetStr + "<br><br>");
              
			}
	
		//	Response.Write("填寫時間：" + dt + "<br>");

               
		}



	}







}
