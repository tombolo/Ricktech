import { MongoClient } from 'mongodb';

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { query } = req.query;
    const uri = 'mongodb+srv://tombolo:Mumo.123@cluster0.vpu068h.mongodb.net/?retryWrites=true&w=majority';

    try {
      const client = await MongoClient.connect(uri, connectionOptions);
      const collection = client.db('NEXT-ECOMMERCE').collection('products');

      // Perform the search query on the desired fields
      const results = await collection
        .find({
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
          ],
        })
        .toArray();

      client.close();

      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while searching.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

