
# Nginx

## Hostinger VPS

 https://www.hostinger.com/in/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=CRYPTOETH&referral_id=019f5df1-9b40-729b-8b85-32846d3c16ff

- REFERRAL CODE = CRYPTOETH


#### You ─► Proxy Server ─► Website

- Hide your IP address from the destination server.
- Bypass geo-restrictions

#### Port 443 is the default port for HTTPS (HyperText Transfer Protocol Secure)
#### HTTP = 80


## command
- sudo apt update
- sudo apt upgrade -y
- sudo apt install nginx -y
- sudo systemctl status nginx
- open browser --> http://localhost/
- ls /var/www/html/ --> index.nginx-debian.html
- curl http://localhost
- sudo nginx -t
- cat /etc/os-release
- sudo nano /etc/nginx/sites-available/nginx-demo-file
- sudo ln -s /etc/nginx/sites-available/nginx-demo-file /etc/nginx/sites-enabled/
- sudo rm /etc/nginx/sites-enabled/default
- sudo systemctl reload nginx


## Information and Tools
- Download Node JS --> https://nodejs.org/en/download



