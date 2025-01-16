export default function Conversations() {
    const conversations = [
      { name: "Sophia B.", message: "Hi! I need more information." },
      { name: "Anne Marie", message: "Awesome work, can you..." },
      { name: "Ivanna", message: "About files I can..." },
      { name: "Peterson", message: "Have a great afternoon..." },
    ]
  
    return (
      <section className="bg-blue-700 text-white p-4 rounded-md w-3/4 mt-4">
        <h2 className="text-lg font-bold mb-2">Conversations</h2>
        <ul className="space-y-2">
          {conversations.map((conv, index) => (
            <li key={index} className="flex justify-between">
              <span>{conv.name}</span>
              <span className="text-gray-300">{conv.message}</span>
              <button className="text-blue-400 hover:underline">Reply</button>
            </li>
          ))}
        </ul>
      </section>
    )
  }