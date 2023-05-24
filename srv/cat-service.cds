using my.bookshop as catalogue from '../db/data-model';

service CatalogService {

    entity Books @readonly as projection on catalogue.Books;
    entity Authors as projection on catalogue.Authors;
    entity Orders @insertonly as projection on catalogue.Orders;
}