import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setSubmittedData(formData)
    setFormData({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Your Feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>

        {submittedData && (
          <div className="mt-4 text-sm">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Feedback:</strong> {submittedData.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}