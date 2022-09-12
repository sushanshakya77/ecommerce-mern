import express from "express";
import CarProducts from "../model/carPartsModel";

export const allProductsController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await CarProducts.find()
      .then((data) => {
        return res.status(201).send(data);
      })
      .catch((err) => {
        return res.status(502).send(err);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingleProduct = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;

    await CarProducts.findById(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductByCategory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const category = req.params.category;
    console.log(category);

    await CarProducts.findOne({ "carDetails.carMaker": category })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(500).send(error);
  }
};
