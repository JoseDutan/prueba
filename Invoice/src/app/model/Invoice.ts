import { Company } from "./Company";
import { Customer } from "./Customer";
import { InvoiceItem } from "./InvoiceItem";

export class Invoice{
    id!:String;
    company!:Company;
    customer!:Customer;
    items!:InvoiceItem[];
}