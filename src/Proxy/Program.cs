var builder = WebApplication.CreateBuilder(args);
builder.Host.ConfigureAppConfiguration((hostingContext, config) =>
{
    config.AddJsonFile("Settings/appsettings.json",
                       optional: true,
                       reloadOnChange: true);
});
// Add services to the container.
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.MapReverseProxy();
app.MapControllers();

app.Run();
