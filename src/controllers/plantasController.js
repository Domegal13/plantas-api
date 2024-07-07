import Plantas from "../models/plantasModel.js";

export const postPlanta = async (req, res) => {
  try {
    const body = req.body;
    await Plantas.sync();
    const newPlanta = await Plantas.create(body);
    res.status(201).json({ message: "---Registro creado correctamente---" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPlantas = async (req, res) => {
  try {
    const plantas = await Plantas.findAll();
    if (plantas.length === 0) {
      res.json({ message: "La Tabla está vacia" });
    } else {
      res.status(200).json(plantas);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPlantaId = async (req, res) => {
  try {
    const { id } = req.params;
    const planta = await Plantas.findByPk(id);
    if (!planta) {
      res.json({ message: "No se encontró ningún registro para este id" });
    } else {
      res.status(200).json(planta);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const putPlanta = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    await Plantas.update(body, {
      where: { id },
    });
    res.json({
      message: "Registro Actualizado Correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePlanta = async (req, res) => {
  try {
    const { id } = req.params;
    const buscarRegistro = Plantas.findByPk(id);
    if (!buscarRegistro) {
      res.json({ message: "No se encontro el Registro a eliminar" });
    } else {
      const deletedPlanta = await Plantas.destroy({
        where: {
          id,
        },
      });
    }
    res.json({ message: `Se eliminó el registro: ${id}` });
  } catch (error) {
    res.json({ message: error.message });
  }
};
