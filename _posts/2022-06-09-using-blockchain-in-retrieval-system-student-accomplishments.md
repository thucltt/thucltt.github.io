---
layout: post
title: Using blockchain in retrieval system student accomplishments
subtitle: Blockchain and applications
cover-img: /assets/img/220906_cover.jpg
thumbnail-img: /assets/img/220906_thumb.png
tags: [en,blockchain]
comments: true
share-img: /assets/img/220906_cover.jpg
---

*[Discussions on [Twitter](https://twitter.com/thucltt/status/1535577318974169088), [LinkedIn](https://www.linkedin.com/posts/thucltt_using-blockchain-in-retrieval-system-student-activity-6941343286443794432-fbxF), and [Comments under the post](https://thucltt.com/2022-06-09-using-blockchain-in-retrieval-system-student-accomplishments/)]*

*[Updated:*

- Source code of Smart contract [here](#smart-contract-source-code).

*]*

Today, I'm writing about "**Using blockchain in retrieval system student accomplishments**"

During their studying of student, the student has accomplishments and needs a highly reliable system to verify them. Blockchain technology with data transparency is the solution for this system.

## **Student accomplishments include?**

In this topic, I define accomplishments include: **Kudo card and Certificate**.

### **Kudo card**

This is a card and on this include: name of the sender, name of receiver and important part of the card is compliments. We can use this to praise our friends or thank our lecturer for help. ***Kudo card can create by all people***. Kudo card has ***spiritual value*** and based on this we can have comprehensive reviews about the individual contributions of students in learning.

<p align="center">
  <img src="/assets/img/220906_kudo.png" alt="kudo_card"/>
  <br><i>Kudo card example</i>
</p>

### **Certificate**

Maybe the certificate is close to everyone. A certificate is an official document that states that the information on it is true ([Cambridge dictionary](https://dictionary.cambridge.org/dictionary/english/certificate)). The certificate was issued when you achieve achievements in competition, participate in an extracurricular activity, etc. Unlike kudo card, the certificate was ***created by an organization*** and has ***legal value***.

<p align="center">
  <img src="/assets/img/220906_cert.png" alt="kudo_card"/>
  <br><i>Certificate example (This is the certificate of my ICPC team, you can read about my team <a href="https://thucltt.com/2020-10-28-HCMUE-AK47-The-2020-ICPC-Vietnam-Southern-Provincial-Programming-Contest/">here</a> and <a href="https://thucltt.com/2021-01-09-CanTho-2020-code/">here</a>, sorry for the inconvenience because it is only in Vietnamese, but I think you can use the translation tool if you want to read ^^)</i>
</p>

## **How to store?**

First, the certificate and kudo card can exist in a PDF file. For convenience, we only store the hash of the PDF file.

### **Where to store PDF files?**

To ensure decentralized nature, we will store the file in the decentralized distributed file system. In this topic, I propose to use IPFS (InterPlanetary File System). The InterPlanetary File System (IPFS) is a peer-to-peer distributed file system that seeks to connect all computing devices with the same system of files. In some ways, IPFS is similar to the Web, but IPFS could be seen as a single BitTorrent swarm, exchanging objects within one Git repository. In other words, IPFS provides a high throughput content-addressed block storage model, with content-addressed hyper links. This forms a generalized Merkle DAG, a data structure upon which one can build versioned file systems, blockchains, and even a Permanent Web. IPFS combines a distributed hashtable, an incentivized block exchange, and a self-certifying namespace. IPFS has no single point of failure, and nodes do not need to trust each other ([Read more about IPFS here](https://arxiv.org/pdf/1407.3561.pdf)).

In IPFS, for flexibility, we encode the file by [base58](https://tools.ietf.org/id/draft-msporny-base58-01.html) to binary string and store it in IPFS. In retrieval, we get the encoding string and decode it into a file.

### **What to store on the blockchain?**

On the blockchain, we only store the hash of the file for validation. In this, I use [the One-Way hash function](https://link.springer.com/content/pdf/10.1007%252F0-387-34805-0_40.pdf) [SHA-256](https://link.springer.com/content/pdf/10.1007/978-3-540-24654-1_13.pdf), I choose SHA-256 because we do not need to save the original file, I will analyze it later. Using SHA-256, we can optimize storage capacity and it helps save cost for transactions on the blockchain.

## **Smart contract (SC)**

We consider a certificate or kudo card is an [NFT](https://ethereum.org/en/nft/). To make sure a certificate or kudo card is unique, I use the method of adding a QR code of the timestamp created it, you can see [an example](#kudo-card) again. In general:

<center><pre style="background: #e6e6ef;">H(F) = H(I + T)</pre></center>

where:

<pre style="background: #e6e6ef;">
  - <code>H</code>: Hash function
  - <code>F</code>: PDF file
  - <code>I</code>: Information includes: creator, receiver, achievement, etc.
  - <code>T</code>: Timestamp
</pre>

Sometimes, information possible to duplicate, in this case, **the timestamp** will make sure two PDF files is different or it is unique.

I use two smart contracts to manage, one for certificate and one for kudo card on the blockchain. SC using the standard token [ERC-721](https://ethereum.org/vi/developers/docs/standards/tokens/erc-721/) to implement.

### **Smart contract for Kudo card (Kudo)**

SC of Kudo includes information:

<pre style="background: #e6e6ef;">
<b>Kudo</b>{
  <b>tokenID</b>: ID of token
  <b>uri</b>: link to pdf file stored on IPFS
  <b>hashOfPDF</b>: sha-256 hash of PDF file
  <b>addressCreateToken</b>: address of the creator
  <b>addressOfOwnerToken</b>: address of the owner
  <b>timestampOfToken</b>: timestamp when token created
  <b>statusOfID</b>: status of token is Valid or Invalid, default is Valid.
}
</pre>

Pseudocode for basic functions in Kudo:

#### **Mint function**

<pre style="background: #e6e6ef;">
<b>FUNCTION mint</b>(address_from, address_to, uri, hashFile):
  <b>IF</b> checkValid(hashFile) == False:
    <b>RETURN</b> "Invalid hash"
  <b>IF</b> checkExistHash(hashFile) == True:
    <b>RETURN</b> "Hash already exists"
  <b>IF</b> address_from == address_to:
    <b>RETURN</b> "You can not mint tokens for self"

  setUriForToken(uri)
  setOwnerForToken(address_to)
  setCreatorForToken(address_from)
  setTimestampForToken(time_data_wirte_on_block)
</pre>

In this function, we have some notes:

- First, we must check the format of the hash is valid or not (is the SHA-256 hash or not). Because if someone intentionally put a long string, it will make SC crash because it takes much time for processing requests.
- Check whether a hash exists or not because an NFT is unique and the hash is the representation of the file therefore the hash of the file must be unique. This is why we just store the hash of the file that I mentioned [here](#what-to-store-on-the-blockchain). Also, storing only the SHA-256 hash of the file helps protect private information.
- Check address mint and address receiving must be different because self-praise is meaningless.
- If the above conditions are valid, data will store on the blockchain.

#### **Disable token function**

<pre style="background: #e6e6ef;">
<b>FUNCTION disableToken</b>(address, id):
  <b>IF</b> checkExistHash(hashFile) == False:
    <b>RETURN</b> "Invalid ID"
  <b>IF</b> addressCreateToken[id] != address <b>OR</b> addressOfOwnerToken[id] != address:
    <b>RETURN</b> "You not permission to delete it"
  <b>IF</b> current_timestamp – timestampOfToken[id] > 1 day:
    <b>RETURN</b> "You cannot delete kudo card created more than 1 day"

  setStatusOfID(id) = "Invalid"
</pre>

I write this function because in some cases, we can miscommunicate on the kudo card, and with this function, we can mark a token as invalid. Note that, it doesn't delete data on the blockchain, it only marks a token as invalid, this action didn't violate the decentralized nature of the blockchain.

Since anyone can create the kudo card, to prevent bad behavior  from affecting recognition, only those who create the token or the owner of the token can delete and processing can be done if the token is created not more than 1 day.

#### **Validate function**

<pre style="background: #e6e6ef;">
<b>FUNCTION validate</b>(hashFile, id):
  <b>IF</b> checkExistHash(hashFile) == False <b>OR</b> statusOfID[id] == "Invalid":
    <b>RETURN</b> "Invalid"
  <b>ELSE</b>:
    <b>RETURN</b> "Valid"
</pre>

On the blockchain, we have the hash of the PDF file and hence we need to check whether the hash input exists on the blockchain or not and check the status of the token is valid or not. If all is valid, this is a valid file or vice versa.

### **Smart contract for Certificate (Cert)**

Almost similar to Kudo, since the certificate was issued by organizations we must add some information about permission in SC.

<pre style="background: #e6e6ef;">
<b>Cert</b>{
  <b>tokenID</b>: ID of token
  <b>uri</b>: link to pdf file stored on IPFS
  <b>hashOfPDF</b>: sha-256 hash of PDF file
  <b>addressCreateToken</b>: address of the creator
  <b>addressOfOwnerToken</b>: address of the owner
  <b>timestampOfToken</b>: timestamp when token created
  <b>statusOfID</b>: status of token is Valid or Invalid, default is Valid.
  <b>roleOfAddress</b>: role of address.
}
</pre>

Compared to Kudo, Cert addition role of address. It has two types of roles:

- **Admin**: Admin has the permit to set or revoke permission to create the certificate for address. Admin address is the address deployed SC on the blockchain.
- **Cert_role**: The address has this permission can create the certificate. Only the address that has this permission can create a certificate, even the admin role can not create it.

Pseudocode for basic functions in Cert:

#### **Grant CERTROLE function**

<pre style="background: #e6e6ef;">
<b>FUNCTION grantCertRole</b>(address_perform, address_grant):
  <b>IF</b> roleOf(address_perform) != "ADMIN":
    <b>RETURN</b> "You must be admin"
  <b>IF</b> roleOf(address_grant) == "ADMIN":
    <b>RETURN</b> "You are admin"
  <b>IF</b> roleOf(address_grant) == "CERTROLE":
    <b>RETURN</b> "Address has been CERTROLE"

  grantRoleFor(address_grant) = "CERTROLE"
</pre>

First, the function check address call function is Admin or not. The authorized address has not been previously issued a CERTROLE and not an Admin address.

#### **Revoke CERTROLE function**

<pre style="background: #e6e6ef;">
<b>FUNCTION revokeCertRole</b>(address_perform, address_revoke):
  <b>IF</b> roleOf(address_perform) != “ADMIN”:
    <b>RETURN</b> “You must be admin”
  <b>IF</b> roleOf(address_revoke) != “CERTROLE”:
    <b>RETURN</b> "Address has not CERTROLE”

  revokeRoleFor(address_revoke)
</pre>

Similar to the grant function, it will check and if it is valid, it will revoke the address.

#### **Mint function**

<pre style="background: #e6e6ef;">
<b>FUNCTION mint</b>(address_from, address_to, uri, hashFile):
  <b>IF</b> roleOf(address_from) != “CERTROLE”:
    <b>RETURN</b> "Address has not CERTROLE”
  <b>IF</b> checkValid(hashFile) == False:
    <b>RETURN</b> "Invalid hash"
  <b>IF</b> checkExistHash(hashFile) == True:
    <b>RETURN</b> "Hash already exists"
  <b>IF</b> address_from == address_to:
    <b>RETURN</b> "You can not mint tokens for self"

  setUriForToken(uri)
  setOwnerForToken(address_to)
  setCreatorForToken(address_from)
  setTimestampForToken(time_data_wirte_on_block)
</pre>

In the mint function, the address call action (address_from) will be checked has CERTROLE or not. All actions after that are the same as the function of Kudo.

#### **Disable token function**

<pre style="background: #e6e6ef;">
<b>FUNCTION disableToken</b>(address, id):
  <b>IF</b> checkExistHash(hashFile) == False:
    <b>RETURN</b> "Invalid ID"
  <b>IF</b> addressCreateToken[id] != address <b>OR</b> addressOfOwnerToken[id] != address:
    <b>RETURN</b> "You not permission to delete it"

  setStatusOfID(id) = "Invalid"
</pre>

Since the certificate was managed by organizations, a certificate can revoke at any time.

#### **Validate function**

<pre style="background: #e6e6ef;">
<b>FUNCTION validate</b>(hashFile, id):
  <b>IF</b> checkExistHash(hashFile) == False <b>OR</b> statusOfID[id] == "Invalid":
    <b>RETURN</b> "Invalid"
  <b>ELSE</b>:
    <b>RETURN</b> "Valid"
</pre>

## **Smart contract source code**

Source code of SC [here](https://github.com/thucle00/retrieval_system_student_accomplishments).

## **Use in practice**

<p align="center">
  <img src="/assets/img/220906_perform.png" alt="perform"/>
  <br><i>System use in practice</i>
</p>

## **Demo**

Smart contract deploys on blockchain Polygon testnet. Details of smart contract [here](https://mumbai.polygonscan.com/address/0x1cc75dc9f7874f4738741dc6ea8eb7f965d95429).

## **Acknowledgment**

- I would like to sincerely thank [Dr. Hai Tran](https://scholar.google.com/citations?user=kHZvlTkAAAAJ&hl=vi&oi=sra) for helping me step by step complete this topic, this is also my Graduate thesis.

- I would like to thank my friend Thao Pham for her suggestions on this topic.

*Thanks for reading and look forward to receiving your comments and discussions!*

<br>
<br>

Photo credit:

- https://www.wallpaperflare.com/grad-cap-diploma-and-stacked-books-photo-school-young-adult-wallpaper-aawmn
