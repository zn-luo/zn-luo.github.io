# openssl

## 以下命令均在命令模式下操作

1. 打印出证书的内容：

    ```bash
    openssl x509 -in cert.pem -noout -text
    ```

2. 打印出证书的系列号：

    ```bash
    openssl x509 -in cert.pem -noout -serial
   ```

3. 打印出证书的拥有者名字：

    ```bash
    openssl x509 -in cert.pem -noout -subject
    ```

4. 以RFC2253规定的格式打印出证书的拥有者名字：

    ```bash
    openssl x509 -in cert.pem -noout -subject -nameopt RFC2253
    ```

5. 在支持UTF8的终端一行过打印出证书的拥有者名字：

    ```bash
    openssl x509 -in cert.pem -noout -subject -nameopt RFC2253
    ```

6. 打印出证书的MD5特征参数：

    ```bash
    openssl x509 -in cert.pem -noout -fingerprint
    ```

7. 打印出证书的SHA特征参数：

    ```bash
    openssl x509 -sha1 -in cert.pem -noout -fingerprint
    ```

8. 把PEM格式的证书转化成DER格式：

    ```bash
    openssl x509 -in cert.pem -inform PEM -out cert.der -outform DER
    ```

9. 把一个证书转化成CSR：

    ```bash
    openssl x509 -in cert.pem -inform PEM -out cert.der -outform DER
    ```

10. 给一个CSR进行处理，颁发字签名证书，增加CA扩展项：

    ```bash
    openssl x509 -req -in careq.pem -extfile openssl.cnf -extensions v3_ca -signkey key.pem -out cacert.pem
    ```

11. 给一个CSR进行处理，颁发字签名证书，增加CA扩展项：

    ```bash
    openssl x509 -req -in careq.pem -extfile openssl.cnf -extensions v3_ca -signkey key.pem -out cacert.pem
    ```

12. 给一个CSR签名，增加用户证书扩展项：

    ```bash
    openssl x509 -req -in careq.pem -extfile openssl.cnf -extensions v3_ca -signkey key.pem -out cacert.pem
    ```

13. 查看csr文件细节：

    ```bash
    openssl req -in my.csr -noout -text
    ```
