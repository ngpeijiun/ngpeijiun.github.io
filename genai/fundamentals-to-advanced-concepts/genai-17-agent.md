1.  Hallucinations: Plausible-sounding but incorrect information.
2.  Multi-Agent Reinforcement -> Reflexion
3.  Plugin architecture
4.  human-in-the-loop, key decision point
5.  anti-patterns
    -   over automation
    -   over design / over complex
    -   poor monitoring
6.  Key principle
    -   Modularity - each agent solve a specific, bounded problem
    -   Transparency - human users can understand and intervene the system
    -   Resilience - Failure of one component, or agent made 1 mistake will not
        collapse the whole system or failed the whole use case
7.  Security Consideration
    -   Access Control
    -   Data Protection: Sensitive content masked by using hashing, encryption or redaction when logging or trasmitting data.
    -   Function Safety: Least accessible access, resource limit (cpu, memory limit), and sandboxes for execution.
    -   Observability and Audit Trails: access log, usage patterns, alert systems

## References

1. [Forbes – Generative AI vs. Agentic AI: The Key Differences Everyone Needs to Know](https://www.forbes.com/sites/bernardmarr/2025/02/03/generative-ai-vs-agentic-ai-the-key-differences-everyone-needs-to-know/)
2. [MIT Press – Multi-Agent Systems: Technical & Ethical Challenges](https://direct.mit.edu/daed/article/151/2/114/110611/Multi-Agent-Systems-Technical-amp-Ethical)
3. [World Economic Forum – How to Ensure the Safety of Modern AI Agents and Multi-Agent Systems](https://www.weforum.org/stories/2025/01/ai-agents-multi-agent-systems-safety/)
4. [IBM – Agentic Chunking: Optimize LLM Inputs with LangChain and watsonx.ai](https://www.ibm.com/think/tutorials/use-agentic-chunking-to-optimize-llm-inputs-with-langchain-watsonx-ai)
5. [MIT Sloan Management Review – Three Essentials for Agentic AI Security](https://sloanreview.mit.edu/article/agentic-ai-security-essentials/)
